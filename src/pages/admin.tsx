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
    imagem: "",
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
      .from("projetos") // nome do bucket
      .upload(fileName, file);

    if (uploadError) {
      alert("Erro ao enviar imagem");
      return;
    }

    // 🔗 Pegar URL pública
    const { data: publicUrlData } = supabase.storage
      .from("projetos")
      .getPublicUrl(fileName);

    const imageUrl = publicUrlData.publicUrl;

    // 💾 Inserir no banco
    const { error } = await supabase
      .from("projetos")
      .insert([
        {
          ...form,
          imagem: imageUrl
        }
      ]);

    if (!error) {
      alert("Projeto cadastrado!");
    } else {
      alert("Erro ao salvar projeto");
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
        onChange={e => setForm({ ...form, titulo: e.target.value })}
      />

      <input
        placeholder="Descrição"
        onChange={e => setForm({ ...form, descricao: e.target.value })}
      />

      <textarea
        placeholder="Detalhes"
        onChange={e => setForm({ ...form, detalhes: e.target.value })}
      />

      <input
        placeholder="Link"
        onChange={e => setForm({ ...form, link: e.target.value })}
      />

      <input
        type="file"
        accept="image/*"
        onChange={e => setFile(e.target.files?.[0] || null)}
      />

      <input
        placeholder="Tipo"
        onChange={e => setForm({ ...form, item: e.target.value })}
      />

      <button type="submit">Salvar</button>
    </form>
  );
}