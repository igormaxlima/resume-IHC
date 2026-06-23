"use client";

import { motion } from "motion/react";

const KEYWORDS = new Set([
  "public",
  "private",
  "static",
  "final",
  "void",
  "int",
  "boolean",
  "class",
  "if",
  "else",
  "for",
  "return",
  "new",
  "true",
  "false",
  "null",
  "this",
  "import",
  "package",
  "try",
  "catch",
]);

const COLORS = {
  keyword: "#7EB8F7",
  string: "#CE9178",
  comment: "#6A9955",
  text: "#D4D4D4",
};

const CODE = [
  "package dev.portfolio;",
  "",
  "public class Application {",
  '  private static final int MAX_RETRIES = 3;',
  "  private static boolean debugMode = false;",
  "",
  "  public static void main(String[] args) {",
  '    System.out.println("Initializing system...");',
  "    UserSession session = new UserSession();",
  "    DataProcessor processor = new DataProcessor();",
  "",
  "    for (int i = 0; i < MAX_RETRIES; i++) {",
  "      if (processor.connect()) {",
  "        session.setActive(true);",
  "        break;",
  "      }",
  '      System.out.println("Retry attempt " + i);',
  "    }",
  "",
  "    if (session.isActive()) {",
  "      processor.loadConfiguration();",
  "      String result = processor.process();",
  "      if (debugMode) {",
  '        System.out.println("[DEBUG] " + result);',
  "      }",
  "      processor.shutdown();",
  "    } else {",
  '      System.out.println("Connection failed");',
  "    }",
  "  }",
  "}",
];

/** Renderiza uma linha de código com highlight simples por tokens. */
function Line({ text }: { text: string }) {
  if (text.trimStart().startsWith("//")) {
    return <div style={{ color: COLORS.comment }}>{text || " "}</div>;
  }

  // separa strings literais do resto
  const segments = text.split(/("[^"]*")/g);

  return (
    <div>
      {segments.map((segment, i) => {
        if (segment.startsWith('"')) {
          return (
            <span key={i} style={{ color: COLORS.string }}>
              {segment}
            </span>
          );
        }
        // colore keywords; mantém separadores/pontuação
        return segment.split(/(\w+)/g).map((token, j) => (
          <span
            key={`${i}-${j}`}
            style={{
              color: KEYWORDS.has(token) ? COLORS.keyword : COLORS.text,
            }}
          >
            {token}
          </span>
        ));
      })}
      {text === "" && " "}
    </div>
  );
}

/**
 * Plano de fundo da HOME: código Java/JS animado, atrás do globo (z-0),
 * com highlight por tokens e opacidade bem baixa.
 */
export default function CodeBackground() {
  return (
    <div className="pointer-events-none absolute right-0 top-0 z-0 h-full w-[55%] select-none overflow-hidden opacity-[0.09]">
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        className="whitespace-pre pl-8 font-mono text-sm uppercase leading-relaxed"
      >
        {[...CODE, ...CODE].map((line, i) => (
          <Line key={i} text={line} />
        ))}
      </motion.div>
    </div>
  );
}
