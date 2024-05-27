const fs = require("fs");

const descriptions = {
  "en": "We are experts in automating and simplifying workflows, ensuring businesses achieve maximum throughput and customer satisfaction.",
  "pt": "Somos especialistas na automação e simplificação de processos, garantindo que as empresas atingem os objetivos máximos em termos de capacidade de resposta e satisfação do cliente."
};

for (const lang in descriptions) {

  const paths = [
    `dist/datapoint/browser/${lang}/index.html`,
    `dist/datapoint/browser/${lang}/index.csr.html`,
    `dist/datapoint/server/${lang}/index.server.html`,
  ];

  for (const path of paths) {
    fs.writeFileSync(
      path,
      fs.readFileSync(path)
        .toString()
        .replace("@@tasks/rewrite-meta-descriptions", descriptions[lang])
    );
  }
}
