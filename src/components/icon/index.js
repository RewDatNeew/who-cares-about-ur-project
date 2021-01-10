import React from 'react';
import './style.less';

import { ReactComponent as ProjectIcon } from './../../svg/project-icon.svg';
import { ReactComponent as HomeIcon } from './../../svg/home.svg';
import { ReactComponent as SackIcon } from './../../svg/sack-icon.svg';
import { ReactComponent as UsersIcon } from './../../svg/users-icon.svg';
import { ReactComponent as SettingsIcon } from './../../svg/settings.svg';
import { ReactComponent as DeleteIcon } from './../../svg/delete.svg';
import { ReactComponent as EditIcon } from './../../svg/edit.svg';
import { ReactComponent as CloseIcon } from './../../svg/close.svg';
import { ReactComponent as SortAscIcon } from './../../svg/sort-asc.svg';
import { ReactComponent as SortDescIcon } from './../../svg/sort-desc.svg';
import { ReactComponent as UserIcon } from './../../svg/user.svg';
import { ReactComponent as LogOutIcon } from './../../svg/logout.svg';
import { ReactComponent as EyeIcon } from './../../svg/eye.svg';
import { ReactComponent as EyeNonIcon } from './../../svg/eye-non.svg';


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
        close: CloseIcon,
        'sort-asc': SortAscIcon,
        'sort-desc': SortDescIcon,
        user: UserIcon,
        'log-out': LogOutIcon,
        eye: EyeIcon,
        'eye-non': EyeNonIcon,
    }[name];

    return (
    <span className="icon">
      <SvgIcon {...svgIconProps} />
    </span>
    );
};
