import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className='shadow-lg bg-white w-full h-screen mx-10 my-5 '>

                {/* <h1 className="text-4xl font-bold mb-4">Welcome to AI Health Assistant</h1>
                <p className="text-lg text-gray-600 mb-6">An interactive AI-powered spatial experience</p> */}

                {/* Ensure a fixed width/height for Canvas */}
                {/* <div className="w-full max-w-lg h-96 bg-white rounded-lg shadow-lg overflow-hidden"> */}
                    {/* <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <OrbitControls />
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </Canvas> */}
                {/* </div> */}

                {/* Chatbot Button */}
                {/* <button
                    onClick={() => navigate('/chat')}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700"
                >
                    Start Chat
                </button> */}
            </div>
        </div>
    );
}

export default Home;
