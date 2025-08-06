import { useParallax } from '../../hooks/useAnimations';

const BackgroundAnimation = () => {
    const y1 = useParallax(0.5);
    const y2 = useParallax(0.3);
    const y3 = useParallax(0.8);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Floating Geometric Shapes */}
            <div 
                className="absolute top-20 left-10 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse"
                style={{ transform: `translateY(${y1}px)` }}
            ></div>
            <div 
                className="absolute top-40 right-20 w-6 h-6 bg-purple-500/20 rotate-45 animate-pulse delay-1000"
                style={{ transform: `translateY(${y2}px) rotate(45deg)` }}
            ></div>
            <div 
                className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-500/20 rounded-full animate-pulse delay-500"
                style={{ transform: `translateY(${y3}px)` }}
            ></div>
            <div 
                className="absolute top-60 right-1/3 w-5 h-5 bg-green-500/20 rotate-12 animate-pulse delay-1500"
                style={{ transform: `translateY(${y1}px) rotate(12deg)` }}
            ></div>
            <div 
                className="absolute bottom-60 right-10 w-4 h-4 bg-yellow-500/20 rounded-full animate-pulse delay-2000"
                style={{ transform: `translateY(${y2}px)` }}
            ></div>

            {/* Large Background Gradients */}
            <div 
                className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
                style={{ transform: `translateY(${y1 * 0.3}px)` }}
            ></div>
            <div 
                className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-3000"
                style={{ transform: `translateY(${y2 * 0.3}px)` }}
            ></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: `
                        linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>
        </div>
    );
};

export default BackgroundAnimation;
