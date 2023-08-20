/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const FolderPlusOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'folder-plus-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M342.7 102.4a51.2 51.2 0 0 1 42.45 22.55l53.86 79.85H921.6a51.2 51.2 0 0 1 51.2 51.2v640a51.2 51.2 0 0 1-51.2 51.2H102.4A51.2 51.2 0 0 1 51.2 896V153.6a51.2 51.2 0 0 1 51.2-51.2h240.3zM128 870.4h768V281.6H398.2L329.1 179.2H128v691.2zM550.4 384v153.6H704v76.8H550.4V768h-76.8V614.4H320v-76.8h153.6V384h76.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default FolderPlusOutlined;
