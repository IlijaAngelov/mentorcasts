import soundtrack from '../../../public/images/soundtrack.jpg';

export default function Conversations() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mt-8">Latest Messages</h1>
            <div className="card bg-base-100 shadow mt-8">
                <div className="card-body">
                    <form method="POST" action="/conversations">
                        <div className="form-control w-full">
                        <textarea
                            name="message"
                            placeholder="What's on your mind?"
                            className="textarea textarea-bordered w-full resize-none"
                            rows={4}
                            maxLength={255}
                            required
                        ></textarea>
                        </div>
                        <div className="mt-4 flex items-center justify-end">
                            <button type="submit" className="btn btn-primary btn-sm">
                                Send!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <main className="m-3 flex flex-col items-center justify-center">
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
            </main>
        </div>
    );
}
