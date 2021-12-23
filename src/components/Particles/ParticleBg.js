import React from "react";
import Particles from "react-particles-js"
import particlesConfig from "./particlesConfig"
const ParticleBg = ({children}) => {
    return (
        <div style={{ position: 'relative' }}>
        <Particles
          params={particlesConfig}
          style={{
            position: 'absolute',
            zIndex: -1,
            width:"100%",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }}
        />
        {children && <div style={{ position: 'relative' }}>{children}</div>}
      </div>
    );
};

export default ParticleBg;