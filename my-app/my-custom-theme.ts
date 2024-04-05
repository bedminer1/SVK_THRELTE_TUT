
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #163c01 
		"--color-primary-50": "220 226 217", // #dce2d9
		"--color-primary-100": "208 216 204", // #d0d8cc
		"--color-primary-200": "197 206 192", // #c5cec0
		"--color-primary-300": "162 177 153", // #a2b199
		"--color-primary-400": "92 119 77", // #5c774d
		"--color-primary-500": "22 60 1", // #163c01
		"--color-primary-600": "20 54 1", // #143601
		"--color-primary-700": "17 45 1", // #112d01
		"--color-primary-800": "13 36 1", // #0d2401
		"--color-primary-900": "11 29 0", // #0b1d00
		// secondary | #d5dadc 
		"--color-secondary-50": "249 249 250", // #f9f9fa
		"--color-secondary-100": "247 248 248", // #f7f8f8
		"--color-secondary-200": "245 246 246", // #f5f6f6
		"--color-secondary-300": "238 240 241", // #eef0f1
		"--color-secondary-400": "226 229 231", // #e2e5e7
		"--color-secondary-500": "213 218 220", // #d5dadc
		"--color-secondary-600": "192 196 198", // #c0c4c6
		"--color-secondary-700": "160 164 165", // #a0a4a5
		"--color-secondary-800": "128 131 132", // #808384
		"--color-secondary-900": "104 107 108", // #686b6c
		// tertiary | #121212 
		"--color-tertiary-50": "219 219 219", // #dbdbdb
		"--color-tertiary-100": "208 208 208", // #d0d0d0
		"--color-tertiary-200": "196 196 196", // #c4c4c4
		"--color-tertiary-300": "160 160 160", // #a0a0a0
		"--color-tertiary-400": "89 89 89", // #595959
		"--color-tertiary-500": "18 18 18", // #121212
		"--color-tertiary-600": "16 16 16", // #101010
		"--color-tertiary-700": "14 14 14", // #0e0e0e
		"--color-tertiary-800": "11 11 11", // #0b0b0b
		"--color-tertiary-900": "9 9 9", // #090909
		// success | #af721d 
		"--color-success-50": "243 234 221", // #f3eadd
		"--color-success-100": "239 227 210", // #efe3d2
		"--color-success-200": "235 220 199", // #ebdcc7
		"--color-success-300": "223 199 165", // #dfc7a5
		"--color-success-400": "199 156 97", // #c79c61
		"--color-success-500": "175 114 29", // #af721d
		"--color-success-600": "158 103 26", // #9e671a
		"--color-success-700": "131 86 22", // #835616
		"--color-success-800": "105 68 17", // #694411
		"--color-success-900": "86 56 14", // #56380e
		// warning | #74073b 
		"--color-warning-50": "234 218 226", // #eadae2
		"--color-warning-100": "227 205 216", // #e3cdd8
		"--color-warning-200": "220 193 206", // #dcc1ce
		"--color-warning-300": "199 156 177", // #c79cb1
		"--color-warning-400": "158 81 118", // #9e5176
		"--color-warning-500": "116 7 59", // #74073b
		"--color-warning-600": "104 6 53", // #680635
		"--color-warning-700": "87 5 44", // #57052c
		"--color-warning-800": "70 4 35", // #460423
		"--color-warning-900": "57 3 29", // #39031d
		// error | #852041 
		"--color-error-50": "237 222 227", // #eddee3
		"--color-error-100": "231 210 217", // #e7d2d9
		"--color-error-200": "225 199 208", // #e1c7d0
		"--color-error-300": "206 166 179", // #cea6b3
		"--color-error-400": "170 99 122", // #aa637a
		"--color-error-500": "133 32 65", // #852041
		"--color-error-600": "120 29 59", // #781d3b
		"--color-error-700": "100 24 49", // #641831
		"--color-error-800": "80 19 39", // #501327
		"--color-error-900": "65 16 32", // #411020
		// surface | #771713 
		"--color-surface-50": "235 220 220", // #ebdcdc
		"--color-surface-100": "228 209 208", // #e4d1d0
		"--color-surface-200": "221 197 196", // #ddc5c4
		"--color-surface-300": "201 162 161", // #c9a2a1
		"--color-surface-400": "160 93 90", // #a05d5a
		"--color-surface-500": "119 23 19", // #771713
		"--color-surface-600": "107 21 17", // #6b1511
		"--color-surface-700": "89 17 14", // #59110e
		"--color-surface-800": "71 14 11", // #470e0b
		"--color-surface-900": "58 11 9", // #3a0b09
		
	}
}