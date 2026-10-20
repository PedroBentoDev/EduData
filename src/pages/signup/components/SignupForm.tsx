
import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../../components/ui/Input";
import { PasswordInput } from "../../../components/ui/PasswordInput";
import { Button } from "../../../components/ui/Button";

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!acceptedTerms) {
      setMessage("Você precisa aceitar os termos para continuar.");
      return;
    }

    // O backend ainda não possui endpoint de cadastro.
    setMessage(
      "Formulário validado! O cadastro estará disponível em breve."
    );
  }

  return (
    <div className="w-full max-w-[390px]">
      <h1 className="text-2xl font-bold leading-tight text-slate-950">
        Explore a educação com mais clareza.
      </h1>

      <p className="mt-4 text-sm leading-relaxed text-slate-700">
        Crie sua conta para organizar suas consultas
        e acompanhar dados educacionais em um só lugar.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-5"
      >
        <Input
          id="name"
          label="Nome:"
          type="text"
          placeholder="Digite seu nome completo..."
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <Input
          id="email"
          label="Seu melhor e-mail:"
          type="email"
          placeholder="Digite seu e-mail..."
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <PasswordInput
          id="password"
          label="Senha:"
          placeholder="Digite sua senha..."
          autoComplete="new-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={8}
          required
        />

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(event) =>
              setAcceptedTerms(event.target.checked)
            }
            className="mt-0.5 h-4 w-4 accent-blue-700"
          />

          <span className="text-xs leading-relaxed text-slate-700">
            Ao criar a conta você concorda com os termos
            e condições e políticas de privacidade.
          </span>
        </label>

        {message && (
          <p role="status" className="text-xs text-blue-700">
            {message}
          </p>
        )}

        <div className="mt-2 flex flex-col items-center gap-3">
          <Button type="submit" variant="secondary">
            Cadastrar
          </Button>

          <p className="text-xs text-slate-700">
            Já tem conta?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-700 hover:underline"
            >
              Faça login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
