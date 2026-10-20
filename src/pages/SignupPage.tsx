
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";

import { SignupForm } from "./signup/components/SignupForm";
import signupIllustration from "../../assets/signup-illustration.svg";

export function SignupPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-16">

        {/* Cabeçalho */}
        <header className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <BookOpen
              size={32}
              strokeWidth={2}
              className="text-emerald-500"
            />

            <span className="text-2xl font-bold text-slate-950">
              EduData
            </span>
          </Link>

          <Link
            to="/"
            className="
              inline-flex items-center gap-2
              rounded-full border border-slate-800
              px-5 py-2 text-xs font-semibold
              text-slate-900 transition-colors
              hover:bg-slate-50
            "
          >
            <ArrowLeft size={15} />
            Voltar ao início
          </Link>
        </header>

        {/* Conteúdo principal */}
        <section
          className="
            grid items-center gap-12
            py-10 lg:grid-cols-2
            lg:gap-20 lg:py-16
          "
        >
          {/* Ilustração à esquerda */}
          <div
            className="
              flex min-h-[380px] items-center
              justify-center overflow-hidden
              rounded-[32px] bg-[#D0F6E4]
              p-8 md:min-h-[540px]
            "
          >
            <img
              src={signupIllustration}
              alt="Ilustração de estudante com elementos educacionais"
              className="
                h-auto w-full max-w-[480px]
                object-contain
              "
            />
          </div>

          {/* Formulário à direita */}
          <div className="flex justify-center lg:justify-start">
            <SignupForm />
          </div>
        </section>
      </div>
    </main>
  );
}
