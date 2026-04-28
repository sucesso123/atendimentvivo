import { MessageCircle, FileText, Headphones, HelpCircle, Shield, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '5511946614258';

function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const services = [
  {
    icon: Shield,
    label: 'Iniciar um Atendimento Seguro',
    message: 'Olá! Gostaria de iniciar um atendimento seguro.',
    description: 'Fale com nossa equipe de forma protegida',
  },
  {
    icon: FileText,
    label: '2ª Via de Boleto',
    message: 'Olá! Preciso de uma 2ª via do meu boleto.',
    description: 'Solicite sua segunda via rapidamente',
  },
  {
    icon: Headphones,
    label: 'Suporte Técnico',
    message: 'Olá! Preciso de suporte técnico.',
    description: 'Assistência técnica especializada',
  },
  {
    icon: HelpCircle,
    label: 'Outro Assunto',
    message: 'Olá! Gostaria de falar sobre outro assunto.',
    description: 'Estamos aqui para ajudar você',
  },
];

interface ServiceCardProps {
  icon: React.ElementType;
  label: string;
  message: string;
  description: string;
}

function ServiceCard({ icon: Icon, label, message, description }: ServiceCardProps) {
  return (
    <a
      href={createWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100 hover:border-purple-300 cursor-pointer"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300">
        <Icon className="w-8 h-8 text-purple-500 group-hover:text-purple-600 transition-colors duration-300" />
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-800 text-base leading-tight mb-1">{label}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="flex items-center gap-2 mt-1 text-purple-500 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <MessageCircle className="w-4 h-4" />
        <span>Iniciar conversa</span>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-2 ring-purple-400 ring-offset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-md">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-purple-600 text-lg tracking-tight">Central de Atendimento</span>
          </div>
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="hidden sm:flex items-center gap-2 text-sm text-gray-500 hover:text-purple-500 transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            <span>(21) 97959-9040</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-pulse">
            <span className="w-2 h-2 bg-purple-500 rounded-full inline-block"></span>
            Atendimento Online
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Sejam{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
              bem-vindos
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-500 mb-4">
            Central de Atendimento
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Escolha uma das opções abaixo e fale diretamente com nossa equipe pelo WhatsApp. Estamos prontos para te ajudar!
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-5xl">
          {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <a
            href={createWhatsAppLink('Olá! Gostaria de falar com a Central de Atendimento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            <MessageCircle className="w-5 h-5" />
            Falar pelo WhatsApp
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Disponível 24 horas &bull; Resposta rápida
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-purple-100 py-6">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Central de Atendimento &bull; Todos os direitos reservados
          </p>
          <p className="text-purple-400 text-xs mt-1">
            Atendimento via WhatsApp: (21) 97959-9040
          </p>
        </div>
      </footer>
    </div>
  );
}
