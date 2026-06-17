import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f5f7fb",
      }}
    >
      <LoginForm />
    </main>
  );
}
