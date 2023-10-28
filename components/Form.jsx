import Link from "next/link";
import { useState } from "react"; // Import useState

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [tagsCountMessage, setTagsCountMessage] = useState(null); // State for the message

  // Count the number of tags
  const tagsCount = post.tag
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean).length;

  const handleTagChange = (e) => {
    const newTagsCount = e.target.value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean).length;

    if (newTagsCount > 3) {
      setTagsCountMessage("You can only enter a maximum of 3 tags.");
    } else {
      setTagsCountMessage(null);
    }

    setPost({ ...post, tag: e.target.value });
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Field of Prompt{" "}
            <span className="font-normal">
              (Eg: product, webdevelopment, idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={handleTagChange} // Use handleTagChange to track tag input
            type="text"
            placeholder="Enter Maximum of 3 Tags"
            required
            className="form_input"
          />
          {tagsCountMessage && ( // Conditionally render the message
            <p className="text-sm text-red-500">{tagsCountMessage}</p>
          )}
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting || tagsCount > 3}
            className={`px-5 py-1.5 text-sm rounded-full text-white ${
              submitting || tagsCount > 3 ? "bg-gray-500" : "bg-primary-orange"
            }`}
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
