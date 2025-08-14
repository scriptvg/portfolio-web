import { useState } from "react";
import { send } from "emailjs-com";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contacto() {
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [feedback, setFeedback] = useState({ sent: false, error: false });
  const [loading, setLoading] = useState(false);

  // Email validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    if (feedback.sent || feedback.error) {
      setFeedback({ sent: false, error: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(toSend.reply_to)) {
      setFeedback({ sent: false, error: "Correo inválido" });
      return;
    }
    setLoading(true);
    try {
      await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        toSend,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      setFeedback({ sent: true, error: false });
      setToSend({ from_name: "", reply_to: "", message: "" });
    } catch {
      setFeedback({ sent: false, error: "Ocurrió un error. Inténtalo de nuevo." });
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = loading || feedback.sent;

  return (
    <section className="w-full min-h-screen px-2 sm:px-4 py-16 sm:py-20 ">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-blue-900 text-center drop-shadow-sm mb-2">
          Contáctame
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-700 text-center mb-6 font-serif">
          ¿Tienes un proyecto o quieres saludar? ¡Escríbeme!
        </h2>
        <Separator className="w-2/3 mx-auto mb-8 h-1 rounded-full bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 border-0" />
        <Card className="w-full shadow-2xl rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-sm transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-blue-900 text-2xl font-serif">Formulario de contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5" aria-disabled={isDisabled}>
              <div>
                <label htmlFor="from_name" className="block text-gray-700 font-medium mb-1">Nombre</label>
                <Input
                  id="from_name"
                  name="from_name"
                  placeholder="Tu nombre"
                  value={toSend.from_name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  disabled={isDisabled}
                  className="transition-all duration-200 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="reply_to" className="block text-gray-700 font-medium mb-1">Correo electrónico</label>
                <Input
                  id="reply_to"
                  type="email"
                  name="reply_to"
                  placeholder="Tu correo"
                  value={toSend.reply_to}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  disabled={isDisabled}
                  aria-invalid={feedback.error && typeof feedback.error === "string"}
                  className="transition-all duration-200 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Mensaje</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tu mensaje"
                  rows={5}
                  value={toSend.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  disabled={isDisabled}
                  className="transition-all duration-200 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg shadow-sm"
                />
              </div>
              <Button
                type="submit"
                className="w-full py-2 font-bold rounded-lg bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white shadow-md transition-all duration-200 hover:from-blue-600 hover:to-blue-700 hover:scale-[1.02] focus:ring-2 focus:ring-blue-300 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={isDisabled}
                aria-disabled={isDisabled}
              >
                {loading ? "Enviando..." : feedback.sent ? "¡Enviado!" : "Enviar mensaje"}
              </Button>
            </form>
            {feedback.sent && (
              <p className="flex items-center justify-center gap-2 bg-green-50 border border-green-200 text-green-700 mt-5 py-2 px-4 rounded-lg text-center font-semibold shadow-sm animate-fade-in" role="status">
                <span>¡Mensaje enviado correctamente!</span>
              </p>
            )}
            {feedback.error && (
              <p className="flex items-center justify-center gap-2 bg-red-50 border border-red-200 text-red-700 mt-5 py-2 px-4 rounded-lg text-center font-semibold shadow-sm animate-fade-in" role="alert">
                <span>{feedback.error}</span>
              </p>
            )}
          </CardContent>
        </Card>
        <Separator className="w-2/3 mx-auto mt-10 mb-4 h-1 rounded-full bg-gradient-to-r from-blue-200 via-gray-100 to-blue-200 border-0" />
        <div className="text-center flex flex-wrap justify-center gap-x-3 gap-y-1 text-base font-sans mt-2">
          <a href="mailto:velezalan34@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-colors duration-150">
            velezalan34@gmail.com
          </a>
          <span className="text-blue-400 font-bold">·</span>
          <a href="https://www.linkedin.com/in/allan-josé-vélez-gonzález" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-colors duration-150" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="text-blue-400 font-bold">·</span>
          <span className="text-gray-700 font-medium">+506 84813021</span>
        </div>
      </div>
    </section>
  );
}
