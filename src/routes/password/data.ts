import ProfileHeaderStyles from '../../components/ProfileHeader/ProfileHeader.module.css';
import infoCellStyles from '../../components/InfoCell/InfoCell.module.css';
import buttonStyles from '../../components/Button/Button.module.css';

import pageStyles from './Password.module.css';

export const data = {
  profileHeader: {
    name: 'John Doe',
    avatarSrc: '',
    styles: {
      profileHeader: ProfileHeaderStyles.profileHeader,
      name: ProfileHeaderStyles.profileHeader__name,
      avatar: ProfileHeaderStyles.profileHeader__avatar,
      subheading: ProfileHeaderStyles.profileHeader__subheading
    }
  },
  fields: [
    {
      fieldName: 'Current Password',
      fieldValue: '••••••••••••',
      styles: {
        row: infoCellStyles.infoCell__row,
        label: infoCellStyles.infoCell__label,
        value: infoCellStyles.infoCell__value,
        separator: infoCellStyles.infoCell__separator
      }

    },
    {
      fieldName: 'New Password',
      fieldValue: '',
      styles: {
        row: infoCellStyles.infoCell__row,
        label: infoCellStyles.infoCell__label,
        value: infoCellStyles.infoCell__value,
        separator: infoCellStyles.infoCell__separator
      }
    },
    {
      fieldName: 'Confirm New Password',
      fieldValue: '',
      styles: {
        row: infoCellStyles.infoCell__row,
        label: infoCellStyles.infoCell__label,
        value: infoCellStyles.infoCell__value,
        separator: infoCellStyles.infoCell__separator
      }
    }
  ],
  styles: {
    card: pageStyles.card,
    profile: pageStyles.profile,
    actionBlock: pageStyles.profile__actions,
    section: pageStyles.profile__section,
    info: pageStyles.profile__info,
    separator: infoCellStyles.infoCell__separator
  },
  buttonStyles: buttonStyles.button,
}
