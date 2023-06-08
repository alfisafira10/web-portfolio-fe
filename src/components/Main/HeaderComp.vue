<template>
    <header>
        <h1>Alfi Safira Az Zahrah</h1>
        <nav id="navigation">
            <RouterLink :to="{ name: 'home' }">Home</RouterLink>
            <RouterLink :to="{ name: 'project' }">Project</RouterLink>
            <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
        </nav>
    </header>
</template>

<style lang="scss">
#navigation {
    display: flex;
    gap: 1rem;
}
</style>