# 🎨 Animações e Micro-interações - Sol Key Website

Este documento explica como usar as animações e micro-interações implementadas no site da Sol Key usando Framer Motion.

## 📦 Instalação

O Framer Motion já está instalado no projeto:
```bash
npm install framer-motion
```

## 🚀 Componentes Animados

### 1. Quem Somos (`src/components/quem-somos/index.jsx`)

**Animações implementadas:**
- **Entrada suave**: Cards aparecem com fade-in e escala
- **Hover effects**: Cards se elevam e ícones rotacionam
- **Stagger animation**: Elementos aparecem sequencialmente
- **CTA animado**: Botão com hover e tap effects

**Principais features:**
```jsx
// Animação de entrada
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// Hover effect
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.3 }}
>

// Stagger animation
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
>
```

### 2. Projetos (`src/components/projectos/index.jsx`)

**Animações implementadas:**
- **Cards flutuantes**: Elevação suave no hover
- **Overlay animado**: Informações aparecem com fade-in
- **Imagens escaláveis**: Zoom suave no hover
- **Tags animadas**: Aparecem sequencialmente

### 3. Equipe (`src/pages/equipe.jsx`)

**Animações implementadas:**
- **Cards da equipe**: Entrada com stagger
- **Social links**: Hover com escala e elevação
- **Imagens**: Zoom suave no hover
- **Informações**: Fade-in sequencial

## 🛠️ Hooks Personalizados

### useFadeInUp
```jsx
import { useFadeInUp } from '../hooks/useAnimations';

function MyComponent() {
  const fadeInUp = useFadeInUp(0.2); // delay de 0.2s
  
  return (
    <div ref={fadeInUp.ref} style={fadeInUp.style}>
      Conteúdo animado
    </div>
  );
}
```

### useScaleIn
```jsx
import { useScaleIn } from '../hooks/useAnimations';

function MyComponent() {
  const scaleIn = useScaleIn(0.1);
  
  return (
    <div ref={scaleIn.ref} style={scaleIn.style}>
      Conteúdo com escala
    </div>
  );
}
```

### useSlideIn
```jsx
import { useSlideIn } from '../hooks/useAnimations';

function MyComponent() {
  const slideIn = useSlideIn('left', 0.3);
  
  return (
    <div ref={slideIn.ref} style={slideIn.style}>
      Conteúdo deslizante
    </div>
  );
}
```

## 🎯 Variantes de Animação

### animationVariants
```jsx
import { animationVariants } from '../hooks/useAnimations';

// Fade in up
<motion.div variants={animationVariants.fadeInUp}>
  Conteúdo
</motion.div>

// Scale in
<motion.div variants={animationVariants.scaleIn}>
  Conteúdo
</motion.div>

// Hover effects
<motion.div
  whileHover={animationVariants.hoverScale}
  whileTap={animationVariants.buttonTap}
>
  Botão animado
</motion.div>
```

## 📱 Responsividade

Todas as animações são responsivas e se adaptam a diferentes tamanhos de tela:

- **Desktop**: Animações completas
- **Tablet**: Animações reduzidas
- **Mobile**: Animações simplificadas

## ⚡ Performance

**Otimizações implementadas:**
- `viewport={{ once: true }}`: Animações só executam uma vez
- `amount: 0.3`: Trigger quando 30% do elemento está visível
- `ease: "easeOut"`: Curvas de animação suaves
- `duration` otimizada para cada tipo de animação

## 🎨 Tipos de Animação

### 1. Entrada (Entry Animations)
- **Fade In**: Aparecimento suave
- **Slide In**: Deslizamento de direções
- **Scale In**: Crescimento suave
- **Stagger**: Sequência de elementos

### 2. Hover (Hover Effects)
- **Lift**: Elevação do elemento
- **Scale**: Aumento de escala
- **Rotate**: Rotação de ícones
- **Color**: Mudança de cor

### 3. Interação (Interaction)
- **Button Tap**: Feedback de clique
- **Link Hover**: Estados de hover
- **Form Focus**: Estados de foco

## 🔧 Como Adicionar Novas Animações

### 1. Para um novo componente:
```jsx
import { motion } from 'framer-motion';

export default function NewComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Seu conteúdo
    </motion.div>
  );
}
```

### 2. Para hover effects:
```jsx
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ duration: 0.3 }}
>
  Elemento com hover
</motion.div>
```

### 3. Para animações sequenciais:
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

<motion.div variants={containerVariants}>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## 🎯 Boas Práticas

1. **Performance**: Use `once: true` para animações de entrada
2. **Acessibilidade**: Não dependa apenas de animações para informação
3. **Consistência**: Mantenha padrões de timing e easing
4. **Mobile**: Teste em dispositivos móveis
5. **Reduced Motion**: Respeite preferências do usuário

## 🚀 Próximos Passos

- [ ] Adicionar animações ao navbar
- [ ] Implementar animações no footer
- [ ] Criar animações para formulários
- [ ] Adicionar animações de loading
- [ ] Implementar animações de transição de página

---

**Desenvolvido com ❤️ pela equipe Sol Key** 