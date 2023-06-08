<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
  <h1>About Me</h1>
  <p>Hello, my name is Alfi. I'm from Gresik, Indonesia. </p>
  <p>I'm a student majoring in Information Systems. Interested and motivated in seeking 
    opportunities to gain experience in technology, such as UI/UX Design, Web Development,
    and Machine Learning. Also always want to try new experiences, new opportunities, and 
    learn to improve myself for a professional career.</p>
  <br />
  <h1>Project List</h1>
  <p>Below are some of my projects : </p>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Basic Portfolio</template>

    Basic portfolio from Basic Web Programming course.
    <br/>
    <p>See Project : <a href="https://alfisafira10.github.io/web-portfolio/" target="_blank">Basic Portfolio</a></p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Our Tailor</template>

    A simple website with case studies in the 
    fictional convection industry, namely Our Tailor.
    <br/>
      <p>See Project : <a href="https://alfisafira10.github.io/our-tailor-website/" target="_blank">Our Tailor</a></p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Buahin</template>

    Fruit type detection app from my team's final project on MSIB Batch 3.
    <br/>
      <p>See Project : <a href="https://buahin.vercel.app/" target="_blank">Buahin</a></p>
  </WelcomeItem>
</template>
