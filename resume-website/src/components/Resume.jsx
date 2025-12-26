import { useState } from "react";

function Resume() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const personalInfo = {
    fatherName: "Hajimohamed M",
    dob: "12-May-2005",
    languages: ["Tamil", "English"],
    gender: "Male",
    nationality: "Indian",
    maritalStatus: "Unmarried",
  };

  const frontendSkills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Vite", level: 70 },
    { name: "Responsive Design", level: 90 },
    { name: "Git/GitHub", level: 75 },
  ];

  const otherQualifications = [
    "Coding Language",
    "Time Management",
    "Leadership",
    "Problem Solving",
    "Communication Skills",
    "Team Collaboration",
  ];

  const academicQualifications = [
    {
      degree: "B.C.A Computer Application",
      institution: "Jamal Mohamed College ,Trichy",
      year: "2025",
    },
    {
      degree: "HSC",
      institution: "Rice City Matric higher Secondary School",
      year: "",
    }
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-10">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-full ${
            isDarkMode
              ? "bg-yellow-100 text-gray-900"
              : "bg-gray-800 text-white"
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      {/* Header Section */}
      <header className="gradient-bg text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                MOHAMED AFRIDI H
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Web Designer & Frontend Developer
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React</span>
                <span className="tag">Vite</span>
                <span className="tag">Tailwind CSS</span>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <p className="mb-1">
                  <svg
                    className="inline w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  396,Japan street Avaniyapuram aduthurai thanjavur district - 612101
                </p>
                <p className="mb-1">
                  <svg
                    className="inline w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  8523989070
                </p>
                <p>
                  <svg
                    className="inline w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                 afridimohamed88@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Career Objective */}
            <div
              className={`rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center text-indigo-600">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  />
                </svg>
                Career Objective
              </h2>
              <p
                className={`leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                To make contribution in the organization with best of my ability
                and also to develop new skills during the interaction to achieve
                new heights.
              </p>
            </div>

            {/* Academic Qualification */}
            <div
              className={`rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center text-indigo-600">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Academic Qualification
              </h2>

              <div className="space-y-6">
                {academicQualifications.map((qual, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-indigo-500 pl-4"
                  >
                    <h3
                      className={`text-xl font-semibold ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      {qual.degree}
                    </h3>
                    <p
                      className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                    >
                      {qual.institution}
                    </p>
                    {qual.year && (
                      <p className="text-indigo-500 font-medium">{qual.year}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div
              className={`rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center text-indigo-600">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Work Experience
              </h2>

              <div className="flex items-center justify-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Fresher
                  </h3>
                  <p className="text-gray-600">
                    Eager to start my professional journey
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Side Content */}
          <div className="space-y-8">
            {/* Personal Information */}
            <div
              className={`rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center text-indigo-600">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Personal Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 text-indigo-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Father's Name
                    </p>
                    <p
                      className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                    >
                      {personalInfo.fatherName}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 text-indigo-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Date of Birth
                    </p>
                    <p
                      className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                    >
                      {personalInfo.dob}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 text-indigo-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Languages Known
                    </p>
                    <div className="flex gap-2 mt-1">
                      {personalInfo.languages.map((lang, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div
                    className={`p-3 rounded-lg ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-50"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Gender
                    </p>
                    <p
                      className={`font-semibold ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      {personalInfo.gender}
                    </p>
                  </div>

                  <div
                    className={`p-3 rounded-lg ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-50"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Nationality
                    </p>
                    <p
                      className={`font-semibold ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      {personalInfo.nationality}
                    </p>
                  </div>

                  <div
                    className={`p-3 rounded-lg col-span-2 ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-50"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Marital Status
                    </p>
                    <p
                      className={`font-semibold ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      {personalInfo.maritalStatus}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Qualifications */}
            <div
              className={`rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center text-indigo-600">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Other Qualifications
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {otherQualifications.map((qualification, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg"
                  >
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend Skills */}
            <div
              className={`rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center text-indigo-600">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Frontend Skills
              </h2>

              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span
                        className={`font-medium ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-indigo-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="font-bold mb-4 flex items-center text-indigo-600">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    Vite
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    VS Code
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                    Figma
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    GitHub
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    DevTools
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Declaration */}
        <div
          className={`mt-8 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-indigo-100 ${
            isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center text-indigo-600">
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Declaration
          </h2>
          <p
            className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            I hereby declared that the above information given by me is true to
            best of my Knowledge.
          </p>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <p
                  className={`font-semibold ${
                    isDarkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  Place: Kumbakonam
                </p>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Date: {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <p className="font-bold text-lg text-indigo-600">
                  (MOHAMED AFRIDI H)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="gradient-bg text-white py-6 mt-8">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p>
            © {new Date().getFullYear()} Mohamed Afridi H. All rights reserved.
          </p>
          <p className="text-sm mt-2 text-blue-100">
            Designed with React & Tailwind CSS (Vite Plugin)
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Resume;
