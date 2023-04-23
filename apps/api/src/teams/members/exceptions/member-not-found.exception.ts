import { NotFoundException } from '@nestjs/common';

export class MemberNotFounException extends NotFoundException {
	constructor() {
		super('Member not found.');
	}
}
