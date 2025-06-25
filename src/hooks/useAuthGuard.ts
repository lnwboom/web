import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuthGuard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      router.replace("/auth/login");
      setLoading(false);
      return;
    }
    fetch("/api/user", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) {
          router.replace("/auth/login");
        } else {
          const data = await res.json();
          setUser(data.user);
        }
      })
      .finally(() => setLoading(false));
  }, [router]);

  return { user, loading };
}

export function setToken(token: string | null) {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
  window.dispatchEvent(new Event('tokenchange'));
} 