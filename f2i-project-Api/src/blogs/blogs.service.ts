import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog) private blogRepository: Repository<Blog>,
  ) {}

  create(createBlogDto: CreateBlogDto, user: User) {
    const newBlog = this.blogRepository.create(createBlogDto);
    newBlog.user = user;
    return this.blogRepository.save(newBlog);
  }

  async findAll() {
    return await this.blogRepository.find();
  }

  async findOne(id: number) {
    const blog = await this.blogRepository.findOneBy({ id });
    if (!blog) {
      throw new NotFoundException('blog does not exist or deleted');
    }
    return blog;
  }

  async findOneByTitle(title: string) {
    const blog = await this.blogRepository.findOneBy({ title: title });
    if (!blog) {
      throw new NotFoundException('blog does not exist or deleted');
    }
    return blog;
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    const blog = await this.findOne(id);

    if (!blog) {
      throw new NotFoundException(`blog with ID #${id} not found`);
    }

    Object.assign(blog, updateBlogDto);
    return this.blogRepository.save(blog);
  }

  async remove(id: number) {
    const blog = await this.findOne(id);

    if (!blog) {
      throw new NotFoundException(`blog with ID #${id} not found`);
    }
    return this.blogRepository.remove(blog);
  }
}
