import React, { useActionState } from "react";

function App() {
  const [state, formAction, isPending] = useActionState(async (prevState, formData) => {
    await new Promise((r) => setTimeout(r, 2000));

    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "test@example.com" && password === "1234") {
      return "Kirish muvaffaqiyatli";
    } else {
      return "Notogri malumot";
    }
  }, "");

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Login form</h2>
      <form action={formAction}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Parol"
          required
          style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button
          type="submit"
          disabled={isPending}
          style={{
            width: "100%",
            padding: "8px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          {isPending ? "Loading..." : "Login"}
        </button>
      </form>

      {state && <p style={{ marginTop: "15px" }}>{state}</p>}
    </div>
  );
}

export default App;
