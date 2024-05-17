import React from "react";
import operaciones from "../../assets/Copia de IMG_4036.png";

function AreasPracticantes() {
  return (
    <div class="max-w-7xl mx-auto my-4 px-2">
      <ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
        <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
          <a class="relative" href="/tool/writey-ai">
            <img
              class="rounded relative w-full object-cover aspect-video"
              src={operaciones}
              alt="Writey A.I"
              loading="lazy"
            />
          </a>

          <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
            <p
              class="flex justify-center items-center text-xl font-semibold text-blue-700 hover:text-teal-800 two-lines text-ellipsis"
            >
              <span>Talent Hub</span><br />
              <small class="font-medium text-sm">
              El Corazón de la Atracción de Talento
              </small>
            </p>

            <p class="text-gray-600 two-lines">
              Writey A.I is an AI tool that generates original, researched blog
              posts in minutes, provides content optimization advice, and works
              with a plagiarism-free rule.
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-primarycolor text-black px-2 py-0.5 rounded-lg"
              >
                <a className="p-2 text-white">Postula Aquí</a>
              </li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2 my-1">
              
            </ul>
          </div>
        </li>

        <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
          <a class="relative" href="/tool/writemeai">
            <img
              class="rounded relative w-full object-cover aspect-video"
              src={operaciones}
              alt="WriteMe.ai"
              loading="lazy"
            />
          </a>

          <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
            <a
              href="/tool/writemeai"
              class="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis"
            >
              <span>WriteMe.ai</span>

              <small class="font-medium text-sm">
                - AI Writer - Content Writing Assistant
              </small>
            </a>

            <p class="text-gray-600 two-lines">
              WriteMe.ai is your #1 AI-powered content writing assistant that
              crafts high-quality content at a fraction of the cost. This
              advanced solution eliminates the need for manual writing and
              allows users to effortlessly generate content in a few clicks.
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Freemium</span>
              </li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2 my-1">
              <li class="flex items-center gap-2">
                <span>Chatbot,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>Content Generation,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>General Writing,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>Social Media Assistant,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>Writing</span>
              </li>
            </ul>
          </div>
        </li>

        <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
          <a class="relative" href="/tool/publer">
            <img
              class="rounded relative w-full object-cover aspect-video"
              src={operaciones}
              alt="Publer"
              loading="lazy"
            />
          </a>

          <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
            <a
              href="/tool/publer"
              class="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis"
            >
              <span>Publer</span>

              <small class="font-medium text-sm">
                - Your Social Media Superhero
              </small>
            </a>

            <p class="text-gray-600 two-lines">
              Publer is a robust social media management platform offering a
              range of features including post scheduling, collaboration tools,
              analytics, and AI assistance to supercharge your social media
              strategy across multiple platforms.
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Freemium</span>
              </li>

              <li
                title="Support for API"
                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>API</span>
              </li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2 my-1">
              <li class="flex items-center gap-2">
                <span>Marketing,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>Productivity,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>Social Media</span>
              </li>
            </ul>
          </div>
        </li>

        <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
          <a class="relative" href="/tool/anyword">
            <img
              class="rounded relative w-full object-cover aspect-video"
              src={operaciones}
              alt="Anyword"
              loading="lazy"
            />
          </a>

          <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
            <a
              href="/tool/anyword"
              class="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis"
            >
              <span>Anyword</span>

              <small class="font-medium text-sm">
                - Advanced AI Writing Built for Marketing Results
              </small>
            </a>

            <p class="text-gray-600 two-lines">
              Anyword is an AI-powered platform trusted by marketing teams
              across the globe to generate, score, and rank content based on
              predicted performance. With features like Custom Scoring AI
              models, Brand Messaging Management, and a Performance Boost Chrome
              Extension, Anyword provides highly personalized and effective
              content for every channel.
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Free Trial</span>
              </li>

              <li
                title="Support for API"
                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>API</span>
              </li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2 my-1">
              <li class="flex items-center gap-2">
                <span>Copywriting,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>Marketing</span>
              </li>
            </ul>
          </div>
        </li>

        <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
          <a class="relative" href="/tool/blogseo-ai">
            <img
              class="rounded relative w-full object-cover aspect-video"
              src={operaciones}
              alt="BlogSEO AI"
              loading="lazy"
            />
          </a>

          <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
            <a
              href="/tool/blogseo-ai"
              class="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis"
            >
              <span>BlogSEO AI</span>

              <small class="font-medium text-sm">
                - AI Writer for SEO&zwj; That Follows Best Practices
              </small>
            </a>

            <p class="text-gray-600 two-lines">
              BlogSEO AI revolutionizes SEO writing. Stay at the top of your SEO
              game with this automated writing tool that generates
              high-performing blog content. It also offers keyword research,
              internal linking strategy, schema generation, and more.
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Free Trial</span>
              </li>

              <li
                title="Support for API"
                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>API</span>
              </li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2 my-1">
              <li class="flex items-center gap-2">
                <span>Marketing,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>SEO,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>Content Generation</span>
              </li>
            </ul>
          </div>
        </li>

        <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
          <a class="relative" href="/tool/typewise">
            <img
              class="rounded relative w-full object-cover aspect-video"
              src={operaciones}
              alt="Typewise"
              loading="lazy"
            />
          </a>

          <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
            <a
              href="/tool/typewise"
              class="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis"
            >
              <span>Typewise</span>

              <small class="font-medium text-sm">
                - AI Communication Assistant
              </small>
            </a>

            <p class="text-gray-600 two-lines">
              Typewise is an AI Communication Assistant that helps customer
              service and sales teams communicate faster and more effectively.
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Contact for Pricing</span>
              </li>

              <li
                title="Support for API"
                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>API</span>
              </li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2 my-1">
              <li class="flex items-center gap-2">
                <span>Business,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>Communication,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>Customer Support,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>Email,</span>
              </li>
              <li class="flex items-center gap-2">
                <span>Sales</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AreasPracticantes;
