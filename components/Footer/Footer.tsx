import Link from "next/link";
import "./footer.css";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <Image
            src="/img/bfs-logo-escuro.jpg"
            alt="Logo BFS"
            width={140}
            height={40}
          />
          <p className="footer-description">
            Soluções rápidas e confiáveis em Paralegal, Contabilidade e
            Consultoria Empresarial. Velocidade, precisão e confiança para seu
            negócio.
          </p>
        </div>

        <div className="footer-links">
          <h4>Institucional</h4>
          <Link href="/">Início</Link>
          <Link href="/quem-somos">Sobre</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/contato">Contato</Link>
        </div>

        <div className="footer-links">
          <h4>Serviços</h4>
          <ul>
            <li>Legalização Empresarial</li>
            <li>Certificação Digital</li>
            <li>Livros Societários</li>
            <li>Emissão de Certidões</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Contato</h4>
          <p>Email: contato@bfs.com.br</p>
          <p>WhatsApp: (11) 99999-9999</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Business Fast Solutions. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
