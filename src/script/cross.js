const canvas = document.getElementById("sangue");
const ctx = canvas.getContext("2d");


/*
=====================================================
CONFIGURAÇÕES GERAIS DO SÍMBOLO
=====================================================
*/

// Posição central do símbolo no canvas
const cx = 200;
const cy = 200;

// ESCALA GERAL DO SÍMBOLO
// ↓↓↓ DIMINUA para reduzir o símbolo inteiro ↓↓↓
const SCALE = 0.9;

// Espessura base da haste
const STEM_WIDTH = 10 * SCALE;

// Comprimento total da cruz
const STEM_HEIGHT = 230 * SCALE;

// Altura da primeira barra horizontal (menor)
// ↓↓↓ ajuste fino de posicionamento ↓↓↓
const FIRST_BAR_Y = 85 * SCALE;

// Distância entre a primeira e a segunda barra
const BAR_GAP = 25 * SCALE;

// Comprimento das barras
const FIRST_BAR_LENGTH = 80 * SCALE;
const SECOND_BAR_LENGTH = 115 * SCALE;

// Comprimento da ponta (seta)
const TIP_LENGTH = 40 * SCALE;

/*
=====================================================
SOMBRA (ESTÉTICA)
=====================================================
*/

ctx.shadowColor = "#811616ff";
ctx.shadowBlur = 15;
ctx.shadowOffsetX = -5;
ctx.shadowOffsetY = -5;

/*
=====================================================
DESENHO DO SÍMBOLO
=====================================================
*/

    
ctx.fillStyle = "#ff0000ff";
ctx.beginPath();

// ---------- PONTA SUPERIOR ----------
ctx.moveTo(cx, cy - STEM_HEIGHT / 2 - TIP_LENGTH);
ctx.lineTo(cx + STEM_WIDTH / 2, cy - STEM_HEIGHT / 2);
ctx.lineTo(cx + STEM_WIDTH / 2, cy + FIRST_BAR_Y);

// ---------- PRIMEIRA BARRA (MENOR) ----------
ctx.lineTo(cx - FIRST_BAR_LENGTH, cy + FIRST_BAR_Y);
ctx.lineTo(cx - FIRST_BAR_LENGTH - 18 * SCALE, cy + FIRST_BAR_Y + 4 * SCALE);
ctx.lineTo(cx - FIRST_BAR_LENGTH, cy + FIRST_BAR_Y + 8 * SCALE);

// Retorno ao eixo
ctx.lineTo(cx + STEM_WIDTH / 2, cy + FIRST_BAR_Y + 8 * SCALE);

// ---------- DESCE ATÉ SEGUNDA BARRA ----------
ctx.lineTo(cx + STEM_WIDTH / 2, cy + FIRST_BAR_Y + BAR_GAP);

// ---------- SEGUNDA BARRA (MAIOR / BASE) ----------
ctx.lineTo(cx - SECOND_BAR_LENGTH, cy + FIRST_BAR_Y + BAR_GAP);
ctx.lineTo(cx - SECOND_BAR_LENGTH - 25 * SCALE, cy + FIRST_BAR_Y + BAR_GAP + 6 * SCALE);
ctx.lineTo(cx - SECOND_BAR_LENGTH, cy + FIRST_BAR_Y + BAR_GAP + 12 * SCALE);

// Retorno
ctx.lineTo(cx + STEM_WIDTH / 2, cy + FIRST_BAR_Y + BAR_GAP + 12 * SCALE);

// ---------- PONTA INFERIOR ----------
ctx.lineTo(cx + STEM_WIDTH / 2, cy + STEM_HEIGHT / 2);
ctx.lineTo(cx, cy + STEM_HEIGHT / 2 + TIP_LENGTH);
ctx.lineTo(cx - STEM_WIDTH / 2, cy + STEM_HEIGHT / 2);

// ---------- SUBIDA PELO LADO ESQUERDO ----------
ctx.lineTo(cx - STEM_WIDTH / 2, cy + FIRST_BAR_Y + BAR_GAP + 12 * SCALE);

// Barra maior (lado direito)
ctx.lineTo(cx + SECOND_BAR_LENGTH, cy + FIRST_BAR_Y + BAR_GAP + 12 * SCALE);
ctx.lineTo(cx + SECOND_BAR_LENGTH + 25 * SCALE, cy + FIRST_BAR_Y + BAR_GAP + 6 * SCALE);
ctx.lineTo(cx + SECOND_BAR_LENGTH, cy + FIRST_BAR_Y + BAR_GAP);

// Retorno
ctx.lineTo(cx - STEM_WIDTH / 2, cy + FIRST_BAR_Y + BAR_GAP);

// Subida até barra menor
ctx.lineTo(cx - STEM_WIDTH / 2, cy + FIRST_BAR_Y + 8 * SCALE);

// Barra menor (lado direito)
ctx.lineTo(cx + FIRST_BAR_LENGTH, cy + FIRST_BAR_Y + 8 * SCALE);
ctx.lineTo(cx + FIRST_BAR_LENGTH + 18 * SCALE, cy + FIRST_BAR_Y + 4 * SCALE);
ctx.lineTo(cx + FIRST_BAR_LENGTH, cy + FIRST_BAR_Y);

// Retorno
ctx.lineTo(cx - STEM_WIDTH / 2, cy + FIRST_BAR_Y);

// Fecha no topo
ctx.lineTo(cx - STEM_WIDTH / 2, cy - STEM_HEIGHT / 2);
ctx.closePath();

ctx.fill();