import { HtmlTemplateEnum } from '../enums/grid.enum';
import { EUserRole } from '../enums/user-role.enum';

export interface ILocales {
  code: string;
  label: string;
  shortCode: string;
}

export interface IMenuItems {
  text: string;
  url: string;
  img: string;
  whiteImg: string;
  roles: EUserRole[];
}

export interface IBanner {
  url: string;
  img: string;
}

export interface IGridColumns {
  field: string;
  width: number;
  headerText: string;
  filter?: boolean;
  HtmlTemplateName?: HtmlTemplateEnum;
  textAlign?: 'Right' | 'Left';
}
