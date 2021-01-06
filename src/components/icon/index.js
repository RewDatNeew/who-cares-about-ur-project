import React from 'react';
import './style.less';

import { ReactComponent as ProjectIcon } from './../../svg/project-icon.svg';
import { ReactComponent as HomeIcon } from './../../svg/home.svg';
import { ReactComponent as SackIcon } from './../../svg/sack-icon.svg';
import { ReactComponent as UsersIcon } from './../../svg/users-icon.svg';
import { ReactComponent as SettingsIcon } from './../../svg/settings.svg';
import { ReactComponent as DeleteIcon } from './../../svg/delete.svg';
import { ReactComponent as EditIcon } from './../../svg/edit.svg';

export const Icon = ({ size = '1em', fill = 'currentColor', name, cn = '' }) => {
    const svgIconProps = { width: size, height: size, fill, viewBox: '0 0 24 24', className: cn };
    const SvgIcon = {
        project: ProjectIcon,
        home: HomeIcon,
        sack: SackIcon,
        users: UsersIcon,
        settings: SettingsIcon,
        delete: DeleteIcon,
        edit: EditIcon,
    }[name];

    return (
    <span className="icon">
      <SvgIcon {...svgIconProps} />
    </span>
    );
};
