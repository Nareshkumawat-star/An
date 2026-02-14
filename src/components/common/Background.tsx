import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react/next";

export const Background = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                overflow: "hidden",
            }}
        >
            <UnicornScene
                projectId="jYxrWzSRtsXNqZADHnVH"
                width="100%"
                height="100%"
                scale={1}
                dpi={1.5}
                lazyLoad={true}
                production={true}
            />
        </div>
    );
};
