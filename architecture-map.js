// architecture-map.js
(function () {
  var canvas = document.getElementById('architectureCanvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  // CONFIG
  var bgColor = '#0d0d0d';
  var layerColor = '#111111';
  var borderColor = '#333333';
  var textColor = '#E5E5E5';
  var accentColor = '#4da3ff';
  var capsuleColor = '#1f1f1f';

  // CLEAR
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = '14px Inter, sans-serif';
  ctx.textBaseline = 'top';

  function drawBox(x, y, w, h, label, color) {
    ctx.fillStyle = color || layerColor;
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, w, h);
    ctx.fillStyle = textColor;
    ctx.fillText(label, x + 8, y + 8);
  }

  function drawArrow(x1, y1, x2, y2) {
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    var angle = Math.atan2(y2 - y1, x2 - x1);
    var headLen = 8;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(
      x2 - headLen * Math.cos(angle - Math.PI / 6),
      y2 - headLen * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
      x2 - headLen * Math.cos(angle + Math.PI / 6),
      y2 - headLen * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fillStyle = accentColor;
    ctx.fill();
  }

  // LAYER POSITIONS
  var layerWidth = 220;
  var layerHeight = 70;
  var startX = 40;
  var startY = 40;
  var vGap = 40;

  // 1. Invariant Layer
  drawBox(startX, startY, layerWidth, layerHeight, 'Invariant Layer', layerColor);

  // 2. Deterministic Reasoning Layer
  var reasoningY = startY + layerHeight + vGap;
  drawBox(startX, reasoningY, layerWidth, layerHeight, 'Deterministic Reasoning', layerColor);

  // 3. Capsule Layer
  var capsuleLayerY = reasoningY + layerHeight + vGap;
  drawBox(startX, capsuleLayerY, layerWidth, layerHeight, 'Capsule Layer', layerColor);

  // 4. Human-in-the-Loop Layer
  var hitlY = capsuleLayerY + layerHeight + vGap;
  drawBox(startX, hitlY, layerWidth, layerHeight, 'Human-in-the-Loop', layerColor);

  // Arrows between layers
  drawArrow(startX + layerWidth / 2, startY + layerHeight, startX + layerWidth / 2, reasoningY);
  drawArrow(startX + layerWidth / 2, reasoningY + layerHeight, startX + layerWidth / 2, capsuleLayerY);
  drawArrow(startX + layerWidth / 2, capsuleLayerY + layerHeight, startX + layerWidth / 2, hitlY);

  // CAPSULES ROW
  var capsules = [
    'DirectoryInvariantValidator',
    'RequiredFilePresenceReasoner',
    'TestExecutionCapsule',
    'InstructionAlignmentChecker',
    'ProvenanceCapsule'
  ];

  var capY = capsuleLayerY;
  var capRowY = capY + layerHeight + 20;
  var capWidth = 150;
  var capHeight = 50;
  var capGap = 20;
  var capStartX = startX + layerWidth + 40;

  capsules.forEach(function (name, idx) {
    var x = capStartX + idx * (capWidth + capGap);
    var y = capRowY;

    drawBox(x, y, capWidth, capHeight, name, capsuleColor);

    // Arrow from capsule layer to capsule
    drawArrow(
      startX + layerWidth,
      capsuleLayerY + layerHeight / 2,
      x,
      y + capHeight / 2
    );
  });

  // TITLE
  ctx.fillStyle = accentColor;
  ctx.font = '16px Inter, sans-serif';
  ctx.fillText('Gravity Binary — Architecture Map', 40, canvas.height - 40);
})();
