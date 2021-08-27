import * as React from "react";

export default function Footer() {
  return (
    <footer>
      <small>
        <b>
          Made using <a href="https://nextjs.org">Next.js</a> and <a href="https://github.com/egoist/hack">hack.css</a>.
        </b>
        <br />
        MIT License &copy; {new Date().getFullYear()}&mdash;present{" "}
        <a href="https://github.com/kodingdotninja">Koding Ninja</a>.
      </small>

      <style jsx>{`
        footer {
          padding-bottom: 2em;
        }
      `}</style>
    </footer>
  );
}
