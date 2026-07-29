import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact">
      <h2 className="section-headline">
        Let&apos;s <span className="accent-word">Connect</span>
      </h2>
      <p className="section-body">
        Have a project in mind or just want to chat? Drop me a message and I&apos;ll get back to you as soon as possible.
      </p>
      <ContactForm />
    </section>
  );
}
