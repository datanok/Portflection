function ContactForm({ userData, setUserData }) {
  return (
    <div>
      <div class="mb-6">
        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 ">
          Email
        </label>
        <input
          type="email"
          id="name"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Your Email"
          required
        ></input>
      </div>
      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          Github Link
        </label>
        <input
          value={userData.githubLink}
          onChange={(e) =>
            setUserData({ ...userData, githubLink: e.target.value })
          }
          id="message"
          type="url"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-400 focus:border-red-400"
          placeholder="Your Github Profile Link"
        ></input>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          Instagram
        </label>
        <input
          type="url"
          onChange={(e) =>
            setUserData({ ...userData, instagramLink: e.target.value })
          }
          value={userData.instagramLink}
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Your Instagram Profile Link"
          required
        ></input>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          LinkedIn
        </label>
        <input
          type="url"
          value={userData.linkedinLink}
          id="name"
          onChange={(e) =>
            setUserData({ ...userData, linkedinLink: e.target.value })
          }
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Your LinkedIn Profile Link"
        ></input>
      </div>
    </div>
  );
}

export default ContactForm;
