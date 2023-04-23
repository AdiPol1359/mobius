import { NotFoundException } from '@nestjs/common';

export class MemberNotFoundException extends NotFoundException {
	constructor() {
		super('Member not found.');
	}
}
