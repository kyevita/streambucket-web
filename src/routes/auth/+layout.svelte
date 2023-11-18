<script lang="ts">
    import { page } from "$app/stores";
    import "./auth.scss";

    const isLogin = $page.url.pathname.includes("/login");
</script>

<section class="auth-root">
    <ul class="action-menu">
        <li class={isLogin ? "active" : ""}>
            <a href="/login">Login</a>
        </li>
        <li class={!isLogin ? "active" : ""}>
            <a href="/register">Register</a>
        </li>
    </ul>
    <slot />
</section>
