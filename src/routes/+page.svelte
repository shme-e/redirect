<script>
    import { enhance } from '$app/forms';

    let done = $state(false);
</script>

<div class="flex justify-center items-center h-screen">
    <form class="prose" method="POST" use:enhance={() => {
        return async ({ update }) => {
            await update();

            done = true;
        }
    }}>
        {#if done}
            <p class="prose text-green-500">Redirect set successfully!</p>
        {/if}
        <div class="flex justify-center">
            <h1>Redirect Setter</h1>
        </div>
        <div class="flex justify-center gap-4">
            <p class="prose">Enter a URL</p>
            <input type="text" class="border border-gray-300 rounded-md p-2" placeholder="https://example.com" name="redirectUrl"/>
        </div>
        <br>
        <div class="flex justify-center">
            <input type="submit" class="bg-blue-500 text-white rounded-md p-2" value="Submit"/>
        </div>
    </form>
</div>