/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ScanOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'scan-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M153.6 691.2v179.2h179.2v76.8h-256v-256h76.8zm793.6 0v256h-256v-76.8h179.2V691.2h76.8zm0-217.6v76.8H76.8v-76.8h870.4zM332.8 76.8v76.8H153.6v179.2H76.8v-256h256zm614.4 0v255.97h-76.8V153.6H691.2V76.8h256z" />
          </svg>
        ),
      }}
    />
  );
});

export default ScanOutlined;
