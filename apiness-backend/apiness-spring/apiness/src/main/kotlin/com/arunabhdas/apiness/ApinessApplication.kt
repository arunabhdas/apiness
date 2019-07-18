package com.arunabhdas.apiness

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ApinessApplication

fun main(args: Array<String>) {
	runApplication<ApinessApplication>(*args)
}

@Entity
data class Post {
		@Id @GeneratedValue
		val id: Int,
		val title: String,
		val content: String
}

@Repository
interface PostRepository: JpaRepository<Post, Long>


@Component
class PostCommandLineRunner(val repository: PostRepository): PostCommandLineRunner {
	override fun run(vararg args: String?) {
		// TODO : not implemented
	}
}