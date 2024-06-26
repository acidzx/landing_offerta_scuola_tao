import Image from "next/image";
import logoScuolaFooter from "@public/assets/svg/logoScuolaFooter.svg";
import Link from "next/link";

const partners = [
  {
    alt: "acquagranda",
  },
  {
    alt: "amazon",
  },
  {
    alt: "casa-miss-italia",
  },
  {
    alt: "casa-sanremo",
  },
  {
    alt: "costa-crociere",
  },
  {
    alt: "esercito-italiano",
  },
  {
    alt: "fortuna-resort",
  },
  {
    alt: "google",
  },
  {
    alt: "msc-crociere",
  },
  {
    alt: "technogym",
  },
  {
    alt: "terme-casciana",
  },
  {
    alt: "terme-comano",
  },
  {
    alt: "terme-sardegna",
  },
  {
    alt: "terme-saturnia",
  },
  {
    alt: "virgin-active",
  },
  {
    alt: "acquagranda",
  },
  {
    alt: "amazon",
  },
  {
    alt: "casa-miss-italia",
  },
  {
    alt: "casa-sanremo",
  },
  {
    alt: "costa-crociere",
  },
  {
    alt: "esercito-italiano",
  },
  {
    alt: "fortuna-resort",
  },
  {
    alt: "google",
  },
  {
    alt: "msc-crociere",
  },
  {
    alt: "technogym",
  },
  {
    alt: "terme-casciana",
  },
  {
    alt: "terme-comano",
  },
  {
    alt: "terme-sardegna",
  },
  {
    alt: "terme-saturnia",
  },
  {
    alt: "virgin-active",
  },
];

export default function Footer() {
  return (
    <>
      {/*       <div className="mx-auto py-6 lg:py-2 border-t-2 ">
        <div className="slider">
          <div className="slide-track">
            {partners.map((partner, index) => (
              <div className="slide" key={index}>
                <Image
                  src={`/assets/images/partners/${partner.alt}.png`}
                  height={100}
                  width={240}
                  alt={partner.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="flex items-center">
            <Image
              //1010x160px
              width={200}
              src={logoScuolaFooter}
              alt="Logo Tao-Scuola Nazionale di Massaggio"
            />
          </Link>
          <ul className="mt-5 max-w-md space-y-1 text-gray-500 list-none list-inside ">
            <li>
              <strong>Tao Group S.r.l</strong>
            </li>
            <li className="text-sm">Via G. di Vittorio 216-218</li>
            <li className="text-sm">53042 Chianciano Terme (SI)</li>
            <li className="text-sm">P.Iva: 01469200529</li>
            <li className="text-sm">Tel. 0578.62772</li>
            <li className="text-sm">Email. info@taogroup.it</li>
          </ul>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link
              href="https://www.iubenda.com/privacy-policy/98820787"
              className="text-sm cursor-pointer"
              // onClick={() => window.privacyPolicy.showModal()}
              rel="noopener"
              target="_blank"
            >
              Privacy Policy
            </Link>

            <Link
              className="text-sm cursor-pointer"
              // onClick={() => window.cookiePolicy.showModal()}
              rel="noopener"
              href="https://www.iubenda.com/privacy-policy/98820787/cookie-policy"
              target="_blank"
            >
              Cookie Policy
            </Link>
            <Link
              className="text-sm cursor-pointer"
              // onClick={() => window.termsConditions.showModal()}
              rel="noopener"
              href="https://www.iubenda.com/termini-e-condizioni/98820787"
              target="_blank"
            >
              Termini & Condizioni
            </Link>
            <a
              className="cursor-pointer"
              onClick={() =>
                document.dispatchEvent(new Event("cookie_consent_show"))
              }
            >
              {" "}
              Rivedi Consenso Cookie
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
