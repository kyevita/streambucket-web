<script lang="ts">
    import Form from "$lib/components/Forms/Form.svelte";
    import Input from "$lib/components/Forms/Input.svelte";
    import loginFormValidator from "./_validators/LoginFormValidator";
    import "./login.scss";
</script>

<section class="login-root">
    <h1>Login</h1>
    <Form validator={loginFormValidator}>
        <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            fieldError={{ showWarnings: true }}
        />
        <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            fieldError
        />
        <button type="submit">Send</button>
    </Form>
</section>
