import { url2key } from './tools';
export const TOKEN = `Qy_${url2key()}`;

export const ADMIN = 'admin';

export const Settings = {
  title: 'DCIC',
  fullName: "Digital Chain Industrial Control",
  describe: "数字技术和物联网实现智能化的工业控制和协同管理",
  sketch: `"数链"：指数字化和信息化的连接。它表达了物联网和数字技术在工业控制领域的应用，通过数据链路的建立和管理，实现设备、系统和流程的智能互联和协同。
 "工控"：是工业控制的简称。它强调了该名称与工业自动化和控制技术相关，涵盖了自动化管理和工程流程管理等方面的含义。
 因此，"数链工控"寓意着将数字技术和物联网应用于工业控制，实现智能化、高效化和协同化的工程流程管理。`
} as const;