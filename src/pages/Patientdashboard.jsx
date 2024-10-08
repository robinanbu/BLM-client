import { useState, useRef } from "react";
import { requestBlood } from "../services/Api";

const Patientdashboard = () => {
  const [visible, setVisible] = useState(false);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(null); // Track selected blood group
  const formRef = useRef(null); // Ref to the form element

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleRequestBloodClick = () => {
    setVisible(!visible);
  };

  const handleBloodGroupClick = (group) => {
    setSelectedBloodGroup(group);
    formRef.current.bloodGroup.value = group; // Set the value in the form
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: formRef.current.name.value,
      emergency: formRef.current.emergency.value,
      location: formRef.current.location.value,
      age: formRef.current.age.value,
      gender: formRef.current.gender.value,
      bloodGroup: formRef.current.bloodGroup.value,
    };

    try {
      const response = await requestBlood(formData);
      console.log("Form submitted successfully", response);
      alert("Request submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit request.");
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-between px-10 bg-gray-100 py-10">
      <div className="flex flex-col justify-center items-start w-1/2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Blood Request Procedure
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          1. Patient submits a blood request with necessary details.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          2. The blood bank verifies the availability of blood.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          3. If available, the blood is prepared for dispatch.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          4. Blood is transported to the hospital or the patients location.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          5. The patient receives the blood and necessary documentation is
          completed.
        </p>
      </div>

      <div className="w-1/2 flex flex-col items-center">
        {!visible ? (
          <button
            onClick={handleRequestBloodClick}
            className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-red-600 transition duration-300"
          >
            Request Blood
          </button>
        ) : (
          <div className="w-full flex flex-col items-center bg-white shadow-lg p-6 rounded-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Request Blood
            </h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Patient Name"
                className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
                required
              />

              <select
                name="emergency"
                className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
                defaultValue="Emergency"
                required
              >
                <option value="Emergency">Emergency</option>
                <option value="Non-Emergency">Non-Emergency</option>
              </select>

              <input
                type="text"
                name="location"
                placeholder="Location"
                className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
                required
              />

              <select
                name="gender"
                className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
                defaultValue="Male"
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>

              <div className="grid grid-cols-4 gap-4 mt-4">
                {bloodGroups.map((group) => (
                  <button
                    type="button"
                    key={group}
                    onClick={() => handleBloodGroupClick(group)}
                    className={`p-3 border rounded-md flex flex-col items-center justify-center text-lg font-bold ${
                      selectedBloodGroup === group
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-red-100"
                    }`}
                  >
                    <span className="text-2xl">🩸</span>
                    {group}
                  </button>
                ))}
              </div>

              <input type="hidden" name="bloodGroup" />

              <button
                type="submit"
                className="mt-6 bg-red-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-red-600 transition duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Patientdashboard;
