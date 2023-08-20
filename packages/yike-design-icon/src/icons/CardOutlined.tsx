/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CardOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'card-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M972.8 140.8v742.4H51.2V140.8h921.6zM896 435.2H128v371.2h768V435.2zm-76.8 217.6v76.8H588.8v-76.8h230.4zM896 217.6H128v140.8h768V217.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default CardOutlined;
