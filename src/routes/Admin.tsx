import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Admin() {
  const [user, setUser] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    detalhes: "",
    link: "",
    item: ""
  });

  // 🔐 Verificar sessão
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // 🔑 Login simples
  async function handleLogin() {
    const email = prompt("Email:");
    const password = prompt("Senha:");

    if (!email || !password) return;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) alert("Erro ao logar");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!file) {
      alert("Selecione uma imagem");
      return;
    }

    // 📤 Upload da imagem
    const fileName = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("imagens de projetos")
      .upload(fileName, file);

    if (uploadError) {
      console.error("Erro ao enviar imagem:", uploadError);
      alert(`Erro ao enviar imagem: ${uploadError.message}`);
      return;
    }

    // 🔗 URL pública da imagem
    const { data: publicUrlData } = supabase.storage
      .from("imagens de projetos")
      .getPublicUrl(fileName);

    const imageUrl = publicUrlData.publicUrl;

    // 📌 Insert no banco com created_at automático
    const { error } = await supabase
      .from("projetos")
      .insert([
        {
          ...form,
          imagem: imageUrl,
          created_at: new Date().toISOString()
        }
      ]);

    if (!error) {
      alert("Projeto cadastrado!");

      setForm({
        titulo: "",
        descricao: "",
        detalhes: "",
        link: "",
        item: ""
      });

      setFile(null);
    } else {
      console.error("Erro ao salvar projeto:", error);
      alert(`Erro ao salvar projeto: ${error.message}`);
    }
  }

  // 🚫 Bloqueio se não estiver logado
  if (!user) {
    return (
      <div>
        <h2>Área Administrativa</h2>
        <button onClick={handleLogin}>Fazer Login</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={form.titulo}
        onChange={e => setForm({ ...form, titulo: e.target.value })}
      />

      <input
        placeholder="Descrição"
        value={form.descricao}
        onChange={e => setForm({ ...form, descricao: e.target.value })}
      />

      <textarea
        placeholder="Detalhes"
        value={form.detalhes}
        onChange={e => setForm({ ...form, detalhes: e.target.value })}
      />

      <input
        placeholder="Link"
        value={form.link}
        onChange={e => setForm({ ...form, link: e.target.value })}
      />

      <input
        type="file"
        accept="image/*"
        onChange={e => setFile(e.target.files?.[0] || null)}
      />

      <input
        placeholder="Tipo"
        value={form.item}
        onChange={e => setForm({ ...form, item: e.target.value })}
      />

      <button type="submit">Salvar</button>
    </form>
  );
}