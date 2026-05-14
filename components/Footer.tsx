import { footer } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-text-primary/5 px-6 py-10">
      <p className="mx-auto max-w-content text-center text-sm text-text-secondary">
        {footer.text}
      </p>
    </footer>
  );
}
