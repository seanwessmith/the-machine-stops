function runRegl(regl) {
  regl.clear({
    color: [0, 0, 0, 1],
    depth: 1
  });
  regl({
    // In a draw call, we can pass the shader source code to regl
    frag: `
    precision mediump float;
    uniform vec4 color;
    void main () {
      gl_FragColor = color;
    }`,

    vert: `
    precision mediump float;
    attribute vec2 position;
    void main () {
      gl_Position = vec4(position, 1, 2);
    }`,

    attributes: {
      position: [
        [-.1 + xOffset, 0 + yOffset],
        [0 + xOffset, -.1 + yOffset],
        [.1 + xOffset, .1 + yOffset],
      ]
    },

    uniforms: {
      color: [1, 1, 0, 1]
    },

    count: 3
  })()

  regl({
    // In a draw call, we can pass the shader source code to regl
    frag: `
    precision mediump float;
    uniform vec4 color;
    void main () {
      gl_FragColor = color;
    }`,

    vert: `
    precision mediump float;
    attribute vec2 position;
    void main () {
      gl_Position = vec4(position, 1, 2);
    }`,

    attributes: {
      position: [
        [-1.1, 0],
        [-1, -.1],
        [-.9, .1],
      ]
    },

    uniforms: {
      color: [0, 0, 0, 0]
    },

    count: 3
  })()
}

exports = {
  runRegl,
}