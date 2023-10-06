<script lang="ts">
    import Form from "$lib/components/Forms/Form.svelte";
    import Input from "$lib/components/Forms/Input.svelte";
    import loginFormValidator from "./_validators/LoginFormValidator";
</script>

<Form validator={loginFormValidator}>
    <Input id="firstName" name="firstName" fieldError />
    <Input id="lastName" name="lastName" fieldError />
    <Input
        id="email"
        name="email"
        type="email"
        fieldError={{ showWarnings: true }}
    />
    <Input id="password" name="password" type="password" fieldError />
    <button type="submit">Send</button>
</Form>
