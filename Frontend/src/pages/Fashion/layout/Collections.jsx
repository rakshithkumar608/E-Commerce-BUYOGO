import TextType from "../../../component/TextType";

const Collections = () => {
  return (
    <div className="relative z-10 w-full max-w-5xl px-6 flex justify-center pointer-events-none">
          <TextType
            text="New Collections 😍"
            typingSpeed={50}
            deletingSpeed={30}
            pauseDuration={2000}
            loop={true}
            showCursor
            cursorCharacter="|"
            cursorClassName="text-yellow-500"
            className="text-7xl text-emerald-800 font-bold tracking-tight"
          />
        </div>
  )
}

export default Collections