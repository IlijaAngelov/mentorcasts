import soundtrack from '../../../public/images/soundtrack.jpg';

export default function Conversations() {
    return (
        <div className="m-3 border-solid outline-red-400">
            <header className="text-center text-4xl font-bold">
                Conversations Made with React & Inertia
            </header>
            <main className="m-3 flex flex-col items-center justify-center">
                <div className="m-3 p-3">
                    <p className="text-center font-bold">
                        Start the conversation with your React Mentor!
                    </p>
                    <p>
                        What are you interested in? What you want to learn? Fill
                        the textarea below!
                    </p>
                </div>
                <div>
                    <div className="flex h-auto w-200 justify-center border-t-5 border-t-black">
                        <p className="align-center">
                            <textarea
                                name="commentArea"
                                id="commentArea"
                                cols={30}
                                rows={10}
                                placeholder={'Type here'}
                            ></textarea>
                        </p>
                    </div>
                    <div className="flex h-50 w-200 flex-col items-center justify-center border-t-5 border-t-black">
                        <div className="flex text-center">Video chat</div>
                        <button className="rounded-full bg-blue-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-700">
                            Start Video
                        </button>
                    </div>
                    <div className="h-50 w-200 border-t-5 border-t-black">
                        <p className="text-center">Audio messages</p>
                        <img src={soundtrack} alt="A placeholder" />
                    </div>
                </div>
            </main>
        </div>
    );
}
