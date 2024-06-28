import { connect } from "react-redux";
import { setUserData } from "../redux/Action";
import { CldUploadButton } from "next-cloudinary";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

function AboutForm(props) {
  const { userData, setUserData } = props;
  const handleUpload = (result) => {
    setUserData({ ...userData, profileImg: result.info.secure_url });
  };
  return (
    <div className="animate-slideInFromRight">
      <div class="mb-6 ">
        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 ">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={userData.userName}
          onChange={(e) =>
            setUserData({ ...userData, userName: e.target.value })
          }
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Your Name"
          required
        ></input>
      </div>
      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          About You
        </label>
        <textarea
          value={userData.about}
          onChange={(e) => setUserData({ ...userData, about: e.target.value })}
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-400 focus:border-red-400"
          placeholder="Small Introduction About you..."
        ></textarea>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your Role
        </label>
        <input
          type="text"
          onChange={(e) => setUserData({ ...userData, role: e.target.value })}
          value={userData.role}
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Eg. Full Stack Web Developer"
          required
        ></input>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          Skills
        </label>
        <input
          type="text"
          value={userData.skills}
          id="name"
          onChange={(e) => setUserData({ ...userData, skills: e.target.value })}
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Enter skills seperated by a comma ' , '"
        ></input>
      </div>
      <div className="mb-6">
        <label
          className="mb-2 text-sm font-medium text-gray-900 flex gap-2"
          htmlFor="file_input"
        >
          Project Image URL
        </label>

        <CldUploadButton
          cloudName={cloudName}
          uploadPreset={uploadPreset}
          onUpload={handleUpload}
          className="mt-2"
        >
          Upload Image
        </CldUploadButton>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});
const mapDispatchToProps = (dispatch) => ({
  setUserData: (value) => dispatch(setUserData(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutForm);
