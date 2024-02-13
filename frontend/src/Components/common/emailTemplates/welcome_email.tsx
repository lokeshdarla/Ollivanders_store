import React from 'react';

const InvitationEmail: React.FC = () => {
  return (
    <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
      <header>
        <a href="#">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/full-logo.svg"
            alt=""
          />
        </a>
      </header>

      <main className="mt-8">
        <h2 className="text-gray-700 dark:text-gray-200">Hi Olivia,</h2>

        <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
          Alicia has invited you to join the team on{' '}
          <span className="font-semibold ">Meraki UI</span>.
        </p>

        <button className="px-6 py-2 mt-4 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Accept the invite
        </button>

        <p className="mt-8 text-gray-600 dark:text-gray-300">
          Thanks, <br />
          Meraki UI team
        </p>
      </main>

      <footer className="mt-8">
        <p className="text-gray-500 dark:text-gray-400">
          This email was sent to{' '}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
            target="_blank"
          >
            contact@merakiui.com
          </a>
          . If you'd rather not receive this kind of email, you can{' '}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            unsubscribe
          </a>{' '}
          or{' '}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            manage your email preferences
          </a>
          .
        </p>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Meraki UI. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
};

export default InvitationEmail;
